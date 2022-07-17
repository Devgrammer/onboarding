import React, {useState} from 'react'
import { HiUser, HiUserGroup } from 'react-icons/hi';


const Step3 = ({formik, activeStep, setActiveStep}) => {
    const[selection, setSelection]= useState('')
    const[error, setError]=useState('');

     const handleCreateWSpace=()=>{
        if(activeStep === 3){
if(formik?.values?.wrkspType === ''){
    setError('Selection should must be made');
}else{
    setActiveStep(activeStep+1);
}
        }
    }
    return (
        <>
            <div className="onboarding-step-details-container w-96  flex flex-col justify-center  h-44  ">
                <div className="step-heading  text-3xl font-semibold text-center">How are you planning to use Eden?</div>
                <div className="step-heading  my-2 text-gray-500 fon-base text-md text-center">We'll streamline your setupexperience accordingly.</div>
            </div>

            <div className="onboarding-form-container  grid gap-y-8 w-100  ">
                <div className="slection-wrapper w-100 flex justify-center">
                <div className="user-selection-container w-100  justify-center ">
                        <button className={ `form-field-container border-gray-400 bg-white w-36 h-40  rounded-lg border mr-4 p-4 ${selection === 'user' ? 'border-indigo-600focus:ring-indigo-600 ' : 'border-gray-400'} ` } onClick={()=>{setSelection('user'); formik.setFieldValue('wrkspType', 'user');}}>
                    <div className="section-icon h-12"><HiUser style={ { color: `${selection ==='user' ? 'rgb(79 70 229)':'black'}`, fontSize: '28px' } }/></div>
                    <div className=' block mb-2 text-sm text-left font-medium '>For Myself</div>
                    <div className=' block mb text-gray-400 text-xs text-left leading-4 '>Write better. Think more clearly. Stay organized.</div> 
                </button>
                        <button className={ `form-field-container  border-gray-400 bg-white w-36 h-40 ml-4  rounded-lg border  p-4 ${selection === 'team' ? 'border-indigo-600 focus:ring-indigo-600' :'border-gray-400'} `} onClick={ () => {setSelection('team'); formik.setFieldValue('wrkspType', 'team');}}>
                            <div className="section-icon h-12"><HiUserGroup style={ { color: `${selection === 'team' ? 'rgb(79 70 229)' : 'black'}`, fontSize: '28px' } }/></div>
                    <div className=' block mb-2 text-sm text-left font-medium '>With my teams</div>
                    <div className=' block mb text-gray-400 text-xs text-left leading-4 '>Wikis, docs, task & projects, all in one place.</div>
                  
                </button>
                </div>
                </div>
            
                <div className="form-field-container grid gap-y-2  w-100  ">

                    <button type="submit" className=' w-100 h-12 bg-indigo-600 text-white  rounded-md px-2 text-sm disabled:bg-gray-600 border-none   hover:bg-indigo-500' disabled={formik?.values?.wrkspType !== ''?false:true} onClick={ handleCreateWSpace}>Create Workspace</button>
                </div>
            </div>

        </>
    )
}

export default Step3
