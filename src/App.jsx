import { useState } from 'react'
import Eden from './assets/icons/eden_logo.png'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './App.css'
import './styles/global.css'
import { useFormik } from 'formik';
import Step1 from './component/Onboarding/Step1';
import Step2 from './component/Onboarding/Step2';
import Step3 from './component/Onboarding/Step3';
import Step4 from './component/Onboarding/Step4';

function App() {
  const [activeStep, setActiveStep] = useState(1)

const formik = useFormik({
  initialValues:{
    name: '', 
    displayName: '' ,
    wrkspName:'',
    wrkspURL:'',
    wrkspType:'',


  },
  enableReinitialize:true,
  onSubmit:value=>[

  ]
})
console.log('formik', formik.values)
  return (
    <div className=" ">
      <div className="onboarding-main-container w-100 h-screen flex justify-center items-start ">
        <div className="onboarding-inner-container w-100 lg:w-100 ">
          <div className="onboardng-branding-container w-100 flex items-center justify-center h-44 my-2">
            <div className="onboarding-brand-logo mr-1"><img src={Eden} alt="" width={'36px'} /></div>
            <div className="onboarding-branding-text text-3xl  font-extrabold"> Eden</div>
          </div>
<div className="onboarding-progress-tracker-container w-auto  flex  justify-center items-center h-24 ">
              <ProgressBar
                percent={ 25*activeStep}
                width={'75%'}
                height={1}
              filledBackground="rgb(79 70 229)"
              //unfilledBackground="#"
              >
                <Step transition="scale">
                  { ({ accomplished }) => (
                  <div className={ `tracker-icon w-8 h-8 flex justify-center items-center text-xl rounded-full  text-white  ${accomplished ? 'bg-indigo-600' : 'bg-white text-gray-600 border-gray-300 border'}` }>1</div>
                  )}
                </Step>
                <Step transition="scale">
                  { ({ accomplished }) => (
                  <div className={ `tracker-icon w-8 h-8 flex justify-center items-center text-xl rounded-full  text-white  ${accomplished ? 'bg-indigo-600' : 'bg-white text-gray-600 border-gray-300 border'}` }>2</div>
                  )}
                </Step>
                <Step transition="scale">
                  { ({ accomplished }) => (
                  <div className={ `tracker-icon w-8 h-8 flex justify-center items-center text-xl rounded-full  text-white  ${accomplished ? 'bg-indigo-600' :'bg-white text-gray-600 border-gray-300 border'}`}>3</div>
                  )}
                </Step>
                <Step transition="scale">
                  { ({ accomplished }) => (
                  <div className={ `tracker-icon w-8 h-8 flex justify-center items-center text-xl rounded-full  text-white  ${accomplished ? 'bg-indigo-600' : 'bg-white text-gray-600 border-gray-300 border'}` }>4</div>
                  )}
                </Step>
                </ProgressBar>
                

          </div>
        <div className="wrapper float-center  lg:px-0">

          {
            activeStep === 1 ? <Step1  formik={formik} activeStep={activeStep} setActiveStep={setActiveStep}/>:''
          }
          {
            activeStep === 2 ? <Step2  formik={formik} activeStep={activeStep} setActiveStep={setActiveStep} />:''
          }
          {
            activeStep === 3 ? <Step3 formik={formik} activeStep={activeStep} setActiveStep={setActiveStep} />:''
          }
          {
            activeStep === 4 ? <Step4 formik={formik} activeStep={activeStep} setActiveStep={setActiveStep} />:''
          }
          </div>

        </div>

      </div>
     
 
    </div>
  )
}

export default App
