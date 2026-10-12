import { DotWave } from 'ldrs/react';
import 'ldrs/react/DotWave.css';

export default function LoadingPage() {

  return (
    <>
      <div className="container">
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <DotWave size="47" speed="1" color="black" />
        </div>
      </div>
    </>
  )
}