
import vuetify from './vuetify_storybook';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  () => ({
    vuetify,
    template: `
      <v-app>
        <v-main>
          <v-container fluid >
            <story/>
          </v-container>
        </v-main>
      </v-app>
      `,
  }),
];