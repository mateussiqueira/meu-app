import React, { useEffect, useState } from 'react';
import { GetTestimonialsUseCaseImpl } from '../../application/usecases/GetTestimonialsUseCaseImpl';
import { MockTestimonialDataSource } from '../../data/datasources/TestimonialDataSource';
import { TestimonialRepositoryImpl } from '../../data/repositories/TestimonialRepositoryImpl';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const dataSource = new MockTestimonialDataSource();
      const repository = new TestimonialRepositoryImpl(dataSource);
      const useCase = new GetTestimonialsUseCaseImpl(repository);
      
      try {
        const result = await useCase.execute();
        setTestimonials(result);
      } catch (error) {
        console.error('Erro ao buscar depoimentos:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div data-layer="section" className="Section w-[1440px] h-[520px] left-0 top-[3793px] absolute bg-gray-50 border-gray-200">
      <div data-layer="div" className="Div w-[1280px] h-80 left-[80px] top-[96px] absolute bg-black/0 border-gray-200">
        <div data-layer="Quem usa, aprova" className="QuemUsaAprova w-80 h-11 left-[481.47px] top-[-2px] absolute text-center justify-start text-black text-4xl font-bold font-['Inter'] leading-9">Quem usa, aprova</div>
        <div data-layer="div" className="Div w-[1248px] h-56 left-[16px] top-[104px] absolute bg-black/0 border-gray-200">
          {testimonials.length > 0 && testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              data-layer="div" 
              className="Div w-96 h-56 absolute bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border-gray-200"
              style={{ left: index === 0 ? '0' : index === 1 ? '426.66px' : '853.33px' }}
            >
              <div data-layer="div" className="Div w-80 h-16 left-[32px] top-[32px] absolute bg-black/0 border-gray-200">
                <div data-svg-wrapper data-layer="img" className="Img left-0 top-0 absolute">
                  {testimonial.avatarUrl && (
                    <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.3281 0C50.0012 0 64.3281 14.3269 64.3281 32C64.3281 49.6731 50.0012 64 32.3281 64C14.655 64 0.328125 49.6731 0.328125 32C0.328125 14.3269 14.655 0 32.3281 0Z" fill="url(#pattern0)" />
                      <path d="M32.3281 0C50.0012 0 64.3281 14.3269 64.3281 32C64.3281 49.6731 50.0012 64 32.3281 64C14.655 64 0.328125 49.6731 0.328125 32C0.328125 14.3269 14.655 0 32.3281 0Z" stroke="#E5E7EB"/>
                    </svg>
                  )}
                </div>
                <div data-layer="div" className="Div w-28 h-12 left-[80px] top-[8px] absolute bg-black/0 border-gray-200">
                  <div className="w-28 h-5 left-0 top-[2px] absolute justify-start text-black text-base font-bold font-['Inter'] leading-none">
                    {testimonial.customerName}
                  </div>
                  <div className="w-28 h-5 left-0 top-[26px] absolute justify-start text-gray-600 text-base font-normal font-['Inter'] leading-none">
                    {testimonial.customerCompany}
                  </div>
                </div>
              </div>
              <div data-layer="p" className="P w-80 h-16 left-[32px] top-[120px] absolute bg-black/0 border-gray-200">
                <div className="w-80 h-16 left-0 top-[2px] absolute justify-start text-gray-600 text-base font-normal font-['Inter']">
                  "{testimonial.testimonialText}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;