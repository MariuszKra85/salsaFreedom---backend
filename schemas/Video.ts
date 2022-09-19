import { text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Video = list({
  // access:
  ui: {
    listView: {
      initialColumns: ['linkPhoto'],
    },
  },
  fields: {
    video: text({ isRequired: true }),
    linkPhoto: text({ isRequired: true }),
    linkVideo: text({ isRequired: true }),
    description: text({ isRequired: true }),
  },
});
