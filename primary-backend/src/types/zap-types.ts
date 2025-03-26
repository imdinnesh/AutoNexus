import {z} from 'zod';

export const ZapCreateSchema=z.object({
    availableTriggerId:z.string(),
    triggerMetaData:z.any().optional(),
    actions:z.array(z.object({
        availableActionId:z.string(),
        actionMetaData:z.any().optional()
    }))
})