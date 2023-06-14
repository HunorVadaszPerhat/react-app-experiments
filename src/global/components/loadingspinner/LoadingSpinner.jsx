import './LoadingSpinner.css';


/*
https://contactmentor.com/how-to-add-loading-spinner-react-js/
*/

const LoadingSpinner = () => {
  return (
    <>
        <div className="spinner-container" role="status">
            <div className="loading-spinner"></div>
        </div>
    </>
  )
}

export default LoadingSpinner