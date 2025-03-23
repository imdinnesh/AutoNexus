import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";
const client = new PrismaClient();

const kafka = new Kafka({
  clientId: 'outbox-processor',
  brokers: ['localhost:9092'],
})

const TOPIC_NAME="zap-events"

async function main() {

  const producer = kafka.producer()
  await producer.connect()

  while (true) {
    const pendinRows = await client.zapRunOutbox.findMany({
      where: {},
      take: 10, // limit the number of rows to process
    });

    producer.send({
      topic:TOPIC_NAME,
      messages:pendinRows.map(row=>({
        value:row.zapRunId
      }))
    })

    await client.zapRunOutbox.deleteMany({
      where:{
        id:{
          in:pendinRows.map(row=>row.id)
        }
      }
    })

    


  }
}
