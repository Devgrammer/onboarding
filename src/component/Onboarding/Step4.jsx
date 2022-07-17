import React from 'react'
import {  AiOutlineCheck }  from 'react-icons/ai';

const Step4 = ({formik, activeStep, setActiveStep}) => {
    return (
        <>
        
          
            <div className="onboarding-step-details-container w-96  flex flex-col justify-center  h-44">
                <div className="icon-wrapper flex justify-center h-64 w-auto">
                    <span className="congrats-icon w-16 h-16 flex justify-center items-center rounded-full bg-indigo-600 "><AiOutlineCheck style={ { color: "#ffffff", fontSize: '18px' } } /></span>
                </div>
               
                <div className="step-heading  text-3xl font-semibold text-center">{`Congratulations,${formik.values.wrkspName !==''?formik.values.wrkspName.toLowerCase():'Eden!'}`}</div>
                <div className="step-heading my-2 text-gray-500 fon-base text-md text-center">{`You have completed onboarding, you can start using the ${formik.values.wrkspName !==''?formik.values.wrkspName.toLowerCase():'Eden!'}!`}</div>
            </div>

            <div className="onboarding-form-container  grid gap-y-8 w-100 mt-4 ">
               
               
                <div className="form-field-container grid gap-y-2  w-100  ">

                    <button type="submit" className=' w-100 h-12 bg-indigo-600 text-white  rounded-md px-2 text-sm   hover:bg-indigo-500'>{`Launch ${formik.values.wrkspName !==''?formik.values.wrkspName.toLowerCase():'Eden!'}`}</button>
                </div>
            </div>

        </>
    )
}

export default Step4
