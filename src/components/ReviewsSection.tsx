import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS_DATA } from '../data/products';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#0F2E22] bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-xs inline-block">
            VERIFIED NATIONWIDE REVIEWS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2E22] tracking-tight">
            Trusted by Tailors & Aso-Ebi Planners
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Read direct feedback from fashion schools, wedding committees, and gentlemen across Lagos, Abuja, and abroad.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E8E2D9] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-[#E8E2D9] space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-black text-[#0F2E22] text-sm">{rev.name}</span>
                  {rev.verifiedBuyer && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#52B788] bg-[#52B788]/10 px-2 py-0.5 rounded-md">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified Buyer</span>
                    </span>
                  )}
                </div>
                <p className="text-gray-500 font-medium">{rev.role} · {rev.location}</p>
                <p className="text-[11px] text-[#D4AF37] font-semibold pt-0.5">
                  Ordered: {rev.fabricBought}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
