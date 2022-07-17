import React, { useState } from 'react'

const Step1 = ({formik, activeStep, setActiveStep}) => {
const[error, setError]=useState('');
    const handleCreateWSpace=()=>{
        if(activeStep === 1){
if(formik?.values?.name === ''){
    setError('Name should not be blank');
}else if(formik?.values?.displayName === ''){
    setError('Display name should not be blank');
} else if (formik?.values?.displayName === '' && formik?.values?.name === ''){
    setError('All fields should not be blank');
}else{
    setActiveStep(activeStep+1);
}
        }
    }

    console.log('jk', error,formik?.values, activeStep)
    return (
         <>
            <div className="onboarding-step-details-container w-100  flex flex-col justify-center  h-44  ">
                <div className="step-heading w-fit text-3xl font-semibold text-center">Welcome! First things first..</div>
                <div className="step-heading w-100 my-2 text-gray-500 font-base text-md text-center">You can always change them better.</div>
            </div>

            <div className="onboarding-form-container  grid gap-y-8 w-100 ">
                <div className="form-field-container grid gap-y-2 w-100  ">
                    <label htmlFor="input" className=' block mb text-sm text-left font-medium '>Full Name</label>
                    <input type="text" className=' w-100 h-12 bg-gray-50 border border-gray-300  rounded-md px-2 text-sm hover:border-blue-400 focus:ring-indigo-600 focus:border-indigo-600 hover:bg-white' placeholder='Steve Jobs' onChange={(e)=>{formik.setFieldValue('name', e?e.target.value:e)}} />
                </div>
                <div className="form-field-container grid gap-y-2  w-100  ">
                    <label htmlFor="input" className=' block mb text-sm text-left font-medium '>Display Name</label>
                    <input type="text" className=' w-100 h-12 bg-gray-50 border border-gray-300  rounded-md px-2 text-sm hover:border-blue-400 focus:ring-indigo-600 focus:border-indigo-600 hover:bg-white' placeholder='Steve'  onChange={(e)=>{formik.setFieldValue('displayName', e?e.target.value:e)}}/>
                </div>
                <div className="form-field-container grid gap-y-2  w-100  ">

                    <button type="submit" className=' w-100 h-12 bg-indigo-600 text-white  rounded-md px-2 text-sm disabled:bg-gray-600 border-none  hover:bg-indigo-500' disabled={formik?.values?.name !== '' && formik?.values?.displayName !== ''?false:true} onClick={ handleCreateWSpace}>Create Workspace</button>
                </div>
            </div>
            
        </>
    )
}

export default Step1
