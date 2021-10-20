// Reducer
const initialLanguageSetup = {
  sourceLanguage: "en",
  targetLanguage: "ja",
  wordInput: "hello"
};

const languageSetup = (state, action) => {
  switch (action.type) {
    case 'updateFromLanguage':
      return ;
    case 'updateToLanguage':
      return ;
    default:
      return ;
  }
};

export {
  initialLanguageSetup,
  languageSetup
};
