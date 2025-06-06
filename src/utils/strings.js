const STRINGS = {
  APP: {
    TITLE: 'Product list',
    DELETE_CONFIRM: 'Are you sure you want to delete this product?',
    DELETE_SUCCESS: 'Product deleted successfully',
    CREATE_SUCCESS: 'Product created successfully',
    UPDATE_SUCCESS: 'Product updated successfully',
    SAVE_ERROR: 'An error occurred while saving',
  },
  FORM_TITLES: {
    CREATE_PRODUCT: 'Create Product',
    EDIT_PRODUCT: 'Edit Product',
  },
  FORM_BUTTONS: {
    CREATE: 'Create',
    UPDATE: 'Update',
    ADD_PRODUCT: 'Add Product',
  },
  FORM_LABELS: {
    TITLE: 'Name',
    PRICE: 'Price',
    CATEGORY: 'Category',
    IMAGE: 'Image (URL)',
    DESCRIPTION: 'Description',
  },
  FORM_VALIDATIONS: {
    REQUIRED: 'Required',
    INVALID_IMAGE: 'Invalid URL format',
    MIN_PRICE: 'Must be >= 0',
  },
  ERRORS: {
    ALERT_TITLE: 'Error:',
    FETCH_PRODUCTS: 'Failed to load products',
    FETCH_PRODUCT: 'Failed to load product',
  },
  TABLE_HEADERS: {
    TITLE: 'Name',
    PRICE: 'Price',
    CATEGORY: 'Category',
    IMAGE: 'Image',
    ACTIONS: 'Actions',
  },
  PLACEHOLDERS: {
    SEARCH_NAME: 'Search by name...',
  },
  MODALS: {
    DELETE_TITLE: 'Delete product?',
    DELETE_MESSAGE: 'This action cannot be undone.',
    CANCEL: 'Cancel',
    CONFIRM: 'Confirm',
  },
  FILTERS: {
    ALL_CATEGORIES: 'All categories',
  },
  COMMON: {
    BACK: 'Back',
  },
  PAGINATION: {
    PAGE_LABEL: 'Page {current} of {total}',
    PREVIOUS: 'Previous',
    NEXT: 'Next',
  },
  TABLE_ACTIONS: {
    VIEW: 'View',
    EDIT: 'Edit',
    DELETE: 'Delete',
  },  
};

export default STRINGS;
