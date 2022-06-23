import { useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Autocomplete, InputAdornment, Popper, TextField } from '@mui/material';
// components
import Iconify from '../../../components/Iconify';
import { get } from '../../../services/get';
// ----------------------------------------------------------------------

const PopperStyle = styled((props) => <Popper placement="bottom-start" {...props} />)({
  width: '280px !important',
});

// ----------------------------------------------------------------------

BlogPostsSearch.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function BlogPostsSearch({ est, setEst }) {

  const copyEst = async() => {
    const responds = await get('establecimientos');
    const data = responds.data;
    return data;
  };
  useEffect(() => {
    copyEst()
  }, [])

  const searchEst = async(e) => {
    const getApi = await copyEst()
    const search = getApi?.filter(element => element.nombre.toLowerCase().includes(e.target.value.toLowerCase()));
    setEst(search);
  }

  return (
    <Autocomplete
      sx={{ width: 280 }}
      autoHighlight
      popupIcon={null}
      PopperComponent={PopperStyle}
      options={est}
      getOptionLabel={(est) => est.nombre }
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Buscar Restaurante..."
          onChange={searchEst}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
