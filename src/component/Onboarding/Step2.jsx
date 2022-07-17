import React , {useState}from 'react'

const Step2 = ({formik, activeStep, setActiveStep}) => {
    const[error, setError]=useState('');
     const handleCreateWSpace=()=>{
        if(activeStep === 2){
if(formik?.values?.wrkspName === ''){
    setError('Name should not be blank');
}else if(formik?.values?.wrkspURL === ''){
    setError('Display name should not be blank');
} else{
    setActiveStep(activeStep+1);
}
        }
    }
    return (
        <>
            <div className="onboarding-step-details-container w-96  flex flex-col justify-center  h-44   ">
                <div className="step-heading  text-3xl font-semibold text-center">Let's setup a home for all of you work</div>
                <div className="step-heading my-2 text-gray-500 font-base text-md text-center">You can always create another workspace later.</div>
            </div>

            <div className="onboarding-form-container  grid gap-y-8 w-100 ">
                <div className="form-field-container grid gap-y-2 w-100  ">
                    <label htmlFor="input" className=' block mb text-sm text-left font-medium '>Workspace Name</label>
                    <input type="text" className=' w-100 h-12 bg-gray-50 border border-gray-300  rounded-md px-2 text-sm hover:border-blue-400 focus:ring-indigo-600 focus:border-indigo-600 hover:bg-white' placeholder='Eden' onChange={(e)=>{formik.setFieldValue('wrkspName', e?e.target.value:e)}} />
                </div>
                <div className="form-field-container grid gap-y-2  w-100  ">
                    <label htmlFor="input" className=' block mb text-sm text-left font-medium '>Workspace URL <span className='text-gray-400'>(optional)</span></label>
                    <div className="combine-field flex  h-12 ">
                        <input type="text" className=' w-1/4 h-12 bg-gray-50 border font-semibold border-gray-300  rounded-l-md px-2 text-sm hover:border-blue-400 focus:ring-indigo-600 focus:border-indigo-600 hover:bg-white disabled:ring-gray-400 disabled:focus:border-gray-400' placeholder={`www.${formik.values.wrkspName!==''?formik.values.wrkspName.toLowerCase():'eden'}.com/`} disabled />
                        <input type="text" className=' w-3/4 h-12 bg-gray-50 border border-gray-300  rounded-r-md px-2 text-sm hover:border-blue-400 focus:ring-indigo-600 focus:border-indigo-600 hover:bg-white' placeholder='Example'  onChange={(e)=>{formik.setFieldValue('wrkspURL', e?e.target.value:e)}} />
                    </div>
                 
                </div>
                <div className="form-field-container grid gap-y-2  w-100  ">

                    <button type="submit" className=' w-100 h-12 bg-indigo-600 text-white  rounded-md px-2 text-sm disabled:bg-gray-600 border-none    hover:bg-indigo-500' disabled={formik?.values?.wrkspName !== ''?false:true} onClick={ handleCreateWSpace}>Create Workspace</button>
                </div>
            </div>

        </>
    )
}

export default Step2
