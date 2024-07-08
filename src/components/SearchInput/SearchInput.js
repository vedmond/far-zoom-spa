import React, { useState, useCallback  } from 'react';
import { useDispatch } from 'react-redux';
import { InputWrapper, StyledInput, ErrorMessage } from './style';
import { SearchIcon } from '../../shared/assets/icons/SearchIcon';
import { setQuerySearchByName, setQuerySearchByNumber } from '../../app/store/querySlice';
import { debounce } from '../../shared/utils/debounce';

export const SearchInput = ({ placeholder = 'Поиск...', width = '200px', flag }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [validSearchQuery, setValidSearchQuery] = useState(false);
  
  const dispatch = useDispatch();
  
  const validate = (value, regex, errorText) => {
    setError('');

    if (value === '') {
      return { value, valid: false};
    }

    if (!regex.test(value)) {
      setError(errorText);
      return { value, valid: false };
    }

    if (value.length < 3) {
      setError('Введите больше 2х символов');
      return { value, valid: false };
    }

    setValidSearchQuery(true);

    return { value, valid: true };
  };

  const validateValue = (inputValue) => {
    if (flag === 'name') {
      const namesArray = inputValue.toLowerCase().split(' ');
      const userName = namesArray.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
      return validate(userName.trim(), /^[А-Яа-яЁё\s.]+$/, 'Разрешена только кирилица');
    } else {
      return validate(inputValue, /^[0-9]+$/, 'Pазрешены только цифры' );
    }
  };
  
  const handleDebounceFn = (newValue) => {
    const result = validateValue(newValue);

    if (!result.valid) {
      return;
    }
    if (result.valid && flag === 'name') {
      dispatch(setQuerySearchByName(result.value));
    }
    if (result.valid && flag === 'number') {
      dispatch(setQuerySearchByNumber(result.value));
    }
  };

  const debounceFn = useCallback(debounce(handleDebounceFn, 2000), []);

  const handleChange = (event) => {
    setError('');

    if(!validSearchQuery) {
      debounceFn.cancel();
    }

    setValue(event.target.value);
    debounceFn(event.target.value);
  };

  const handleKey = (event) => {
    if (event.key !== 'Enter') {
      return; 
    }

    if(!validSearchQuery) {
      debounceFn.cancel();
    }
    
    handleDebounceFn(event.target.value);
  };

  return (
    <InputWrapper>
      <StyledInput
        placeholder={placeholder}
        width={width}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
      />
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
      <SearchIcon />
    </InputWrapper>
  );
};
