import './modal-add.scss'
import { AiFillCloseCircle } from 'react-icons/ai'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import { Dispatch, FC, SetStateAction } from 'react'
import { PhoneBookEntry } from '../../App'

interface AddModalProps {
  setAddModal: Dispatch<SetStateAction<boolean>>;
  setPhoneBook: Dispatch<SetStateAction<PhoneBookEntry[]>>;
  phoneBook: PhoneBookEntry[];
}

export const AddContactModal: FC<AddModalProps> = ({
  setAddModal,
  setPhoneBook,
  phoneBook
}) => {
  const onClose = () => {
    setAddModal(false)
  }

  const handleSubmitContact = async (resultValues: any) => {
    setAddModal(false)

    const values = {
      id: Math.random().toString(36).substr(2, 9),
      ...resultValues
    }
    setPhoneBook([...phoneBook, values])
  }

  const phoneRegex = RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)

  const validationSchema = object({
    name: string().required('This field is required'),
    lastName: string().required('This field is required'),
    phone: string()
      .matches(phoneRegex, 'Invalid phone number')
      .required('This field is required')
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      lastName: '',
      phone: ''
    },
    resolver: yupResolver(validationSchema)
  })

  return (
    <div className='modal-add-wrapper'>
      <div className='modal-overview'>
        <div className='modal-add-container'>
          <div className='close-modal' onClick={() => onClose()}>
            <AiFillCloseCircle />
          </div>
          <div className='body-modal'>
            <div>
              <h4>New Contact</h4>
            </div>
            <div className='contact-info'>
              <form onSubmit={handleSubmit(handleSubmitContact)}>
                <div className='contact-item'>
                  <label htmlFor='name'>
                    <span>*</span>First Name
                  </label>
                  <input
                    // name='name'
                    type='text'
                    {...register('name')}
                    placeholder='First Name'
                    id='name'
                  />
                  {errors.name && (
                    <div className='error'>{errors.name?.message}</div>
                  )}
                </div>
                <div className='contact-item'>
                  <label htmlFor='lastName'>
                    <span>*</span>Last Name
                  </label>
                  <input
                    // name='lastName'
                    type='text'
                    {...register('lastName')}
                    placeholder='Last Name'
                    id='lastName'
                  />
                  {errors.lastName && (
                    <div className='error'>{errors.lastName?.message}</div>
                  )}
                </div>
                <div className='contact-item'>
                  <label htmlFor='phone'>
                    <span>*</span>Phone
                  </label>
                  <input
                    // name='phone'
                    type='text'
                    {...register('phone')}
                    placeholder='Phone Number'
                    id='phone'
                  />
                  <div className='error'>{errors.phone?.message}</div>
                </div>
                <div className='add-button'>
                  <button type='submit' disabled={isSubmitting}>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}