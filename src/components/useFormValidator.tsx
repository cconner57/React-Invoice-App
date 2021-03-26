const useFormValidator = (input: any) => {
	let errors: any = {};
	if (input.type === 'email' && input.value === '') {
		errors.email = 'Email address is required';
	} else if (
		!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<p>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			input.value
		)
	) {
		errors.email = 'Email address is invalid';
	}

	return errors;
};

export default useFormValidator;
