import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  scrollTargetId?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  scrollTargetId = 'collection-grid',
}) => {
  if (totalItems <= itemsPerPage || totalPages <= 1) {
    return null;
  }

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    onPageChange(newPage);
    
    // Smooth scroll to top of collection
    if (scrollTargetId) {
      const el = document.getElementById(scrollTargetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  // Generate page numbers with smart ellipsis for larger page counts
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push('ellipsis-start');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('ellipsis-end');
      }
      pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      aria-label="Products pagination"
      className="mt-10 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto px-2"
    >
      {/* Product count summary */}
      <div className="text-xs sm:text-sm text-stone-600 font-medium">
        Showing <span className="font-bold text-[#0F2E22]">{startIndex}</span> to{' '}
        <span className="font-bold text-[#0F2E22]">{endIndex}</span> of{' '}
        <span className="font-bold text-[#0F2E22]">{totalItems}</span> products (Page{' '}
        <span className="font-bold text-[#0F2E22]">{currentPage}</span> of{' '}
        <span className="font-bold text-[#0F2E22]">{totalPages}</span>)
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous 15 items"
          className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
            currentPage === 1
              ? 'bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed opacity-60'
              : 'bg-white hover:bg-stone-50 text-[#0F2E22] border-stone-300 shadow-2xs hover:border-[#0F2E22]'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="hidden sm:flex items-center gap-1">
          {pageNumbers.map((page, idx) => {
            if (typeof page === 'string') {
              return (
                <span key={idx} className="px-2 text-stone-400 font-bold select-none">
                  …
                </span>
              );
            }

            const isCurrent = page === currentPage;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handlePageChange(page)}
                aria-current={isCurrent ? 'page' : undefined}
                className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                  isCurrent
                    ? 'bg-[#0F2E22] text-[#D4AF37] border border-[#D4AF37]/50 shadow-xs'
                    : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Mobile current page indicator badge */}
        <div className="sm:hidden px-3 py-1.5 bg-[#0F2E22] text-[#D4AF37] rounded-xl text-xs font-black">
          {currentPage} / {totalPages}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next 15 items"
          className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
            currentPage === totalPages
              ? 'bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed opacity-60'
              : 'bg-[#0F2E22] hover:bg-[#153e2f] text-white border-[#0F2E22] shadow-2xs'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};
