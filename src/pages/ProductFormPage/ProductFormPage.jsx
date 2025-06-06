import {useProductFormController} from '../../hooks';
import {
  ActionButton,
  FormInput,
  FormTextarea,
  ProductDetailSkeleton,
  ErrorAlert,
} from '../../components';
import STRINGS from '../../utils/strings';

export default function ProductFormPage() {
  const {
    isEdit,
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    loading,
    error,
  } = useProductFormController();

  if (loading) return <ProductDetailSkeleton />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-semibold mb-6 text-gray-900">
        {isEdit ? STRINGS.FORM_TITLES.EDIT_PRODUCT : STRINGS.FORM_TITLES.CREATE_PRODUCT}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          label={STRINGS.FORM_LABELS.TITLE}
          name="title"
          register={register}
          validation={{ required: STRINGS.FORM_VALIDATIONS.REQUIRED }}
          error={errors.title}
        />
        <FormInput
          label={STRINGS.FORM_LABELS.PRICE}
          name="price"
          type="number"
          register={register}
          validation={{
            required: STRINGS.FORM_VALIDATIONS.REQUIRED,
            min: { value: 0, message: STRINGS.FORM_VALIDATIONS.MIN_PRICE },
          }}
          error={errors.price}
        />
        <FormInput
          label={STRINGS.FORM_LABELS.CATEGORY}
          name="category"
          register={register}
          validation={{ required: STRINGS.FORM_VALIDATIONS.REQUIRED }}
          error={errors.category}
        />
        <FormInput
          label={STRINGS.FORM_LABELS.IMAGE}
          name="image"
          register={register}
          validation={{
            required: STRINGS.FORM_VALIDATIONS.REQUIRED,
            pattern: {
              value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)$/,
              message: STRINGS.FORM_VALIDATIONS.INVALID_IMAGE,
            },
          }}
          error={errors.image}
        />
        <FormTextarea
          label={STRINGS.FORM_LABELS.DESCRIPTION}
          name="description"
          register={register}
          validation={{ required: STRINGS.FORM_VALIDATIONS.REQUIRED }}
          error={errors.description}
        />
        <div className="flex justify-center">
          <ActionButton
            type="submit"
            label={isEdit ? STRINGS.FORM_BUTTONS.UPDATE : STRINGS.FORM_BUTTONS.CREATE}
            disabled={isSubmitting}
            className="w-full sm:w-auto text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded shadow-sm transition-colors duration-200"
          />
        </div>
      </form>
    </div>
  );
}
