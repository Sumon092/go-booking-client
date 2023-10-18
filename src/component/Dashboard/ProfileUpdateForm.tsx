import React from 'react';
import { useForm, Controller } from 'react-hook-form';

interface ProfileUpdateFormProps {
  defaultValues: {
    email: string;
    phone: string;
    address: string;
  };
  onSubmit: (data: { email: string; phone: string; address: string }) => void;
}

const ProfileUpdateForm: React.FC<ProfileUpdateFormProps> = ({ defaultValues, onSubmit }) => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <Controller
          name="email"
          control={control}
          defaultValue={defaultValues.email}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <>
              <input {...field} type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <span className="text-red-500 text-xs italic">{errors.email && errors.email.message}</span>
            </>
          )}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone No.:
        </label>
        <Controller
          name="phone"
          control={control}
          defaultValue={defaultValues.phone}
          rules={{
            required: 'Phone number is required',
            pattern: {
              value: /^\d{11}$/,
              message: 'Invalid phone number (11 digits)',
            },
          }}
          render={({ field }) => (
            <>
              <input {...field} type="tel" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <span className="text-red-500 text-xs italic">{errors.phone && errors.phone.message}</span>
            </>
          )}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address:
        </label>
        <Controller
          name="address"
          control={control}
          defaultValue={defaultValues.address}
          rules={{ required: 'Address is required' }}
          render={({ field }) => (
            <>
              <textarea {...field} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              <span className="text-red-500 text-xs italic">{errors.address && errors.address.message}</span>
            </>
          )}
        />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Update Profile
        </button>
      </div>
    </form>
  );
};

export default ProfileUpdateForm;
