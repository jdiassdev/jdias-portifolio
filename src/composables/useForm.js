import { ref, reactive, computed } from 'vue'

export const useForm = ({ initialValues, onSubmit, validate } = {}) => {
  const values = reactive({ ...initialValues })
  const errors = ref({})
  const isSubmitting = ref(false)
  const isValidating = ref(false)
  const touched = reactive({})

  const reset = () => {
    Object.assign(values, initialValues)
    errors.value = {}
    Object.assign(touched, {})
  }

  const setFieldValue = (field, value) => {
    values[field] = value
  }

  const setFieldError = (field, error) => {
    if (error) {
      errors.value[field] = error
    } else {
      delete errors.value[field]
    }
  }

  const setFieldTouched = (field, isTouched = true) => {
    touched[field] = isTouched
  }

  const validateForm = async () => {
    isValidating.value = true
    try {
      if (!validate) return true

      const newErrors = await validate(values)
      errors.value = newErrors
      return Object.keys(newErrors).length === 0
    } finally {
      isValidating.value = false
    }
  }

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()

    const isValid = await validateForm()
    if (!isValid) return

    isSubmitting.value = true
    try {
      await onSubmit?.(values)
    } finally {
      isSubmitting.value = false
    }
  }

  const getFieldError = (field) => {
    return touched[field] ? errors.value[field] : undefined
  }

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValidating,
    reset,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    validateForm,
    handleSubmit,
    getFieldError,
  }
}
