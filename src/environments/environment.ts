// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBJf_hmhTav0o7z9iEWVolVFAvg-gE8vYs',
    authDomain: 'sheikhu-recipes.firebaseapp.com',
    databaseURL: 'https://sheikhu-recipes.firebaseio.com',
    projectId: 'sheikhu-recipes',
    storageBucket: 'sheikhu-recipes.appspot.com',
    messagingSenderId: '111633810644'
  }
};
