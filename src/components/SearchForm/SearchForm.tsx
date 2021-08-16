import React from "react";
import {
  Formik,
  Form,
  Field,
  FormikValues,
} from 'formik';
import * as Yup from 'yup';

import './SearchForm.css';

interface FormData {
  search: string,
}

interface Props {
  onSearchSubmit: (place: string) => void,
}

const SearchForm: React.FC<Props> = ({
  onSearchSubmit
}) => {

  const initialValues: FormData = {
    search: '',
  };

  const onSubmit = (values: FormikValues) => {
    onSearchSubmit(values.search);
  };

  const validationSchema = Yup.object({
    search: Yup.string().required('Required'),
  })

  return (
    <section className="search-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='search-form__form'>
          <label className='search-form__label'>
            <Field
              id='search'
              type='text'
              name='search'
              className='search-form__input'
              autoComplete='off'
            />
          </label>

          <button
            className="search-form__submit"
            type='submit'
          />
        </Form>
      </Formik>


    </section>
  );
}

export default SearchForm;
