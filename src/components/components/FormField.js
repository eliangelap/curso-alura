import React from 'react';
import { FormControl, InputLabel, TextField, FormHelperText } from '@material-ui/core';

function FormField({ type, name, value, onChange, required, label, helper }) {

	const idPrefix = "id-";

	return (
		<FormControl fullWidth>
			<TextField id={idPrefix + name}
				multiline={type === 'textarea'}
				name={name}
				type={type}
				value={value}
				label={label}
				onChange={onChange}
				required={required}
				fullWidth
			/>
			<FormHelperText id={idPrefix + name}>{helper}</FormHelperText>
		</FormControl>
	);
}

export default FormField;