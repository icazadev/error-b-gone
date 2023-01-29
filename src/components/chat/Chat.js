import { Form, InputGroup, Button } from 'react-bootstrap'
import { AiOutlineSend } from 'react-icons/ai'
import { requestCohere } from '../../services'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './Chat.scss'

export function Chat() {
  const api_key = process.env.REACT_APP_API_KEY

  const formik = useFormik({
    initialValues: { input: "" },
    validationSchema: Yup.object({input: Yup.string().required(true)}),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await requestCohere(formValue.input, api_key)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
  })


  return (
    <Form className='form-container h-75 w-50 mx-auto' onSubmit={formik.handleSubmit}>
      <div className='form-container__messages'>
        
      </div>
      <div className='form-container__input'>
        <InputGroup>
          <Form.Control
            name="input"
            placeholder="Introduce your problem :)"
            aria-label="Introduce your problem"
            aria-describedby="input-text"
            onChange={formik.handleChange}
          />
          <Button className='border-0' variant="success" id="input-text" type='submit'>
            {formik.isSubmitting ? 
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 
              <AiOutlineSend />
            }
          </Button>
        </InputGroup>
      </div>
    </Form>
  )
}

