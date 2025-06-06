import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";
import {
  useProductFilters,
  useDeleteProductModal,
  useUniqueCategories,
} from "../../hooks";
import {
  ProductTable,
  ProductTableSkeleton,
  ActionButton,
  ErrorAlert,
  SearchInput,
  ConfirmModal,
  CategoryFilter,
  Paginator,
} from "../../components";
import { PlusIcon } from "@heroicons/react/24/solid";
import STRINGS from "../../utils/strings";

export default function ProductListPage() {
  const {
    fetchProducts,
    loading,
    error,
    searchTerm,
    selectedCategory,
    setSearchTerm,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
  } = useProductStore();

  const { paginated, totalPages } = useProductFilters();
  const { modalOpen, openModal, closeModal, confirmDelete } =
    useDeleteProductModal();
  const categories = useUniqueCategories();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <h1 className="text-2xl font-semibold text-gray-800">
            {STRINGS.APP.TITLE}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <SearchInput
              value={searchTerm}
              onChange={(value) => {
                setSearchTerm(value);
                setCurrentPage(1);
              }}
              placeholder={STRINGS.PLACEHOLDERS.SEARCH_NAME}
            />
            <CategoryFilter
              categories={categories}
              value={selectedCategory}
              onChange={(value) => {
                setSelectedCategory(value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <div className="w-full md:w-auto">
          <ActionButton
            to="/products/new"
            label={STRINGS.FORM_BUTTONS.ADD_PRODUCT}
            icon={PlusIcon}
            className="w-full md:w-auto text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded shadow-sm transition-colors duration-200"
          />
        </div>
      </div>

      {loading && <ProductTableSkeleton />}
      {error && <ErrorAlert message={error} />}
      {!loading && !error && (
        <>
          <ProductTable products={paginated} onDelete={openModal} />
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      <ConfirmModal
        isOpen={modalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        title={STRINGS.MODALS.DELETE_TITLE}
        message={STRINGS.MODALS.DELETE_MESSAGE}
      />
    </div>
  );
}
