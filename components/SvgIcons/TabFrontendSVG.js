import React from 'react'

const SvgComponent = props => (
  <svg
    className="prefix__icon"
    viewBox="0 0 1024 1024"
    width={200}
    height={200}
    {...props}
  >
    <defs>
      <style />
    </defs>
    <path d="M976.992 946h-930c-17.12 0-31.008-13.888-31.008-31.008v-806C15.984 91.872 29.856 78 46.992 78h930c17.12 0 31.008 13.872 31.008 30.992v806c0 17.12-13.872 31.008-31.008 31.008zM946 170.992c0-17.12-13.888-30.992-30.992-30.992h-806c-17.12 0-30.992 13.872-30.992 30.992V264h868L946 170.992zM946 326H78v527.008c0 17.12 13.888 31.008 30.992 31.008h806c17.12 0 30.992-13.872 30.992-31.008L946 326zm-744-92.992h-62v-62h62v62zm124 0h-62v-62h62v62zm124 0h-62v-62h62v62z" />
  </svg>
)

export default SvgComponent
