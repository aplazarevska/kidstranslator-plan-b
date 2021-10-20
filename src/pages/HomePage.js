import React, { useState, useReducer } from 'react';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { initialLanguageSetup, languageSetup } from '../utils/utils';

const HomePage = ({ languages }) => {
  // const [store, dispatch] = useReducer(languageSetup, initialLanguageSetup);
  // const { sourceLanguage, targetLanguage, wordInput } = store;

  const [sourceLanguage, setSourceLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');

  const handleChangeSourceLanguage = (event) => {
    setSourceLanguage(event.target.value);
  };

  const handleChangeTargetLanguage = (event) => {
    setTargetLanguage(event.target.value);
  };

  // console.log(languages);
  
  return (
    <div className="homePage">
      <Container>
        <h1>Kids' Translator Cards</h1>
          <div className="columns">
            {/* Source Language */}
            <div className="column-left">
              <div>
                <FormControl fullWidth>
                  <InputLabel id="fromLanguageLabel" sx={{ padding: '0 .5em', backgroundColor: '#fff' }}>Select a language</InputLabel>
                  <Select
                    labelId="fromLanguageLabel"
                    id="fromLanguage"
                    value={sourceLanguage}
                    label="From"
                    onChange={handleChangeSourceLanguage}
                  >
                    <MenuItem value=""></MenuItem>
                    {languages.map((item, i) => (
                      <MenuItem key={i} value={item.code}>{item.language}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                {/* Flag component */}
              </div>
            </div>

            <div className="column-middle">
              <DoubleArrowIcon />
            </div>
            
            {/* Target Language */}
            <div className="column-right">
              <div>
                <FormControl fullWidth>
                  <InputLabel id="toLanguageLabel" sx={{ padding: '0 .5em', backgroundColor: '#fff' }}>Select a language</InputLabel>
                  <Select
                    labelId="toLanguageLabel"
                    id="toLanguage"
                    value={targetLanguage}
                    label="To"
                    onChange={handleChangeTargetLanguage}
                  >
                    <MenuItem value=""></MenuItem>
                    {languages.map((item, i) => (
                      <MenuItem key={i} value={item.code}>{item.language}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                {/* Flag component */}
              </div>
            </div>

            {/* Input for user */}
            <div className="column-full">
              <TextField id="wordInput" label="Word to Translate" variant="outlined" />
            </div>
          </div>
      </Container>
    </div>
  )
}

export default HomePage;
