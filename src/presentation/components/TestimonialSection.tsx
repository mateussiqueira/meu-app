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
    <div className="w-full py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Quem usa, aprova
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8"
              >
                <div className="flex items-start mb-6">
                  {testimonial.avatarUrl && (
                    <div className="flex-shrink-0 mr-4">
                      <svg width="48" height="48" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.3281 0C50.0012 0 64.3281 14.3269 64.3281 32C64.3281 49.6731 50.0012 64 32.3281 64C14.655 64 0.328125 49.6731 0.328125 32C0.328125 14.3269 14.655 0 32.3281 0Z" fill="url(#pattern0)" />
                        <path d="M32.3281 0C50.0012 0 64.3281 14.3269 64.3281 32C64.3281 49.6731 50.0012 64 32.3281 64C14.655 64 0.328125 49.6731 0.328125 32C0.328125 14.3269 14.655 0 32.3281 0Z" stroke="#E5E7EB"/>
                      </svg>
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-black mb-1">
                      {testimonial.customerName}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.customerCompany}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "{testimonial.testimonialText}"
                </p>
              </div>
            ))
          ) : (
            // Adiciona um estado de carregamento quando não há testemunhos
            <div className="col-span-full text-center py-12">
              <div className="animate-pulse inline-block h-6 w-6 rounded-full bg-violet-300"></div>
              <p className="text-gray-500 mt-4">Carregando depoimentos...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;