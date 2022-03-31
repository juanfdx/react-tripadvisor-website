import './InfoIcon.css'


const InfoIcon = ({ icon }) => {


  return (
    <>
      {
        (icon === 'watch') &&
        <svg viewBox="0 0 24 24" width="24px" height="24px" className='summary-visit-slide-svg'><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z"></path><path d="M13.01 6.52h-2L11 12.439l3.779 3.75 1.41-1.419L13 11.61z"></path></svg>
        
      }
      {
        (icon === 'check') &&
        <svg viewBox="0 0 24 24" width="24px" height="24px" className='summary-visit-slide-svg'><path d="M9.48 18.375l-5.93-5.928 1.782-1.782 4.148 4.147 9.188-9.187 1.782 1.782z"></path></svg>
      }
      {
        (icon === 'car') &&
        <svg viewBox="0 0 24 24" width="24px" height="24px" className='summary-visit-slide-svg'><path d="M9 14h6v2H9z"></path><path d="M21 6h-1V5a3 3 0 00-3-3H7a3 3 0 00-3 3v1H3a1 1 0 00-1 1v4a1 1 0 001 1h1v10h2v-2h12v2h2V12h1a1 1 0 001-1V7a1 1 0 00-1-1zm-3 12H6v-6h12v6zM7 4h10a1 1 0 011 1v5H6V5a1 1 0 011-1z"></path></svg>
      }
      {
        (icon === 'wheelchair') &&
        <svg viewBox="0 0 24 24" width="24px" height="24px" className='summary-visit-slide-svg'><path d="M17.037 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .901 2 2 2zM19.537 11l-6.3-.1 2.8-2.9c.2-.2.1-.6-.1-.7l-5.2-4.9c-.2-.2-.4-.2-.6-.1l-3.5 2.2c-.3.1-.3.4-.2.7l.6.8c.2.2.5.3.7.1l2.1-1.4c.2-.1.4-.1.6.1l1.3 1.2c.2.2.2.5 0 .7l-3.4 3.6c-2.5.7-4.3 3-4.3 5.7 0 3.3 2.7 6 6 6s6-2.7 6-6c0-1.1-.3-2.1-.8-3h2c.3 0 .5.3.5.6l-.5 4.9c0 .3.2.5.399.6l1 .102c.301 0 .5-.2.601-.4l.7-7.1c.1-.502-.1-.702-.4-.702zm-9.5 9c-2.2 0-4-1.8-4-4s1.8-4 4-4h.1c.2 0 .3 0 .5.1.4.1.8.2 1.1.4.3.2.6.3.899.6.801.7 1.399 1.801 1.399 3 .002 2.1-1.798 3.9-3.998 3.9z"></path></svg>
      }
      {
        (icon === 'group') &&
        <svg viewBox="0 0 24 24" width="24px" height="24px" className='summary-visit-slide-svg'><path d="M21.811 14.925a5.354 5.354 0 00-4.211-2c-.584 0-1.164.095-1.72.28l-.01-.012a5.466 5.466 0 00-3.87-1.6c-1.4 0-2.8.532-3.87 1.6l-.01.012a5.408 5.408 0 00-1.72-.28 5.353 5.353 0 00-4.21 2l-.19.27v3.83h8.82v-3.812l-.19-.25a5.428 5.428 0 00-.83-.83 3.732 3.732 0 012.2-.712 3.732 3.732 0 012.2.712 5.428 5.428 0 00-.83.83l-.19.251v3.812H22v-3.83l-.189-.271zM9 17.256H3.82v-1.41a3.58 3.58 0 015.18 0v1.41zm11.18 0H15v-1.41a3.58 3.58 0 015.18 0v1.41zM12.021 6.794a.911.911 0 110 1.822.911.911 0 010-1.822zm6.12 1.82a.91.91 0 11-.001 1.821.91.91 0 01.001-1.821zm0-1.82a2.73 2.73 0 100 5.46 2.73 2.73 0 000-5.46zm-6.12-1.82a2.73 2.73 0 100 5.46 2.73 2.73 0 000-5.46zM5.88 8.614a.91.91 0 11-.001 1.821.91.91 0 01.001-1.821zm0-1.82a2.73 2.73 0 100 5.46 2.73 2.73 0 000-5.46z"></path></svg>
      }
      {
        (icon === 'baby') &&
        <svg viewBox="0 0 24 24" width="24px" height="24px" className='summary-visit-slide-svg'><path d="M12 8.5c1.4 0 2.5-1.1 2.6-2.5 0-1.4-1.1-2.5-2.5-2.5S9.6 4.6 9.5 6c0 1.4 1.1 2.5 2.5 2.5zM17.3 13.7l-2.6-3c-1.1-1.5-3.2-1.7-4.7-.6-.2.1-.4.3-.5.5-.1 0-2.8 3.1-2.8 3.1-.2.2-.2.5 0 .7l.7.7c.2.2.5.2.7 0L9.3 14l-.9 3.6h1V20c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-2.5h1V20c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5v-2.5h1l-.7-3.5 1.1 1.1c.2.2.5.2.7 0l.7-.699c.2-.201.3-.501.1-.701z"></path></svg>
      }
      {
        (icon === 'pets') &&
        <svg viewBox="0 0 24 24" width="24px" height="24px" className='summary-visit-slide-svg'><path d="M9 6.952a2 2 0 10-.001-4.001A2 2 0 009 6.952zm-3 2a2 2 0 11-4.001-.001A2 2 0 016 8.952zm6 2c-1.838 0-3.236.651-4.293 1.707a6.956 6.956 0 00-1.439 2.146c-.355.846-.479 1.681-.298 2.404.201.803.572 1.284.994 1.545.424.264 1.026.383 1.835.217.229-.046.492-.164.89-.343.107-.048.224-.101.353-.157.509-.225 1.223-.52 1.958-.52.734 0 1.448.295 1.957.52l.354.157c.397.179.661.297.89.343.81.166 1.411.047 1.835-.217.422-.261.794-.742.994-1.545.182-.725.059-1.559-.295-2.402a6.977 6.977 0 00-1.441-2.148c-1.064-1.061-2.456-1.707-4.294-1.707zm-5.707.293C7.724 9.813 9.632 8.952 12 8.952c2.367 0 4.27.855 5.707 2.293a8.96 8.96 0 011.871 2.789c.459 1.094.711 2.385.393 3.66-.3 1.197-.928 2.17-1.881 2.761-.951.59-2.1.72-3.29.478-.47-.097-1.001-.338-1.413-.525l-.236-.105c-.526-.232-.885-.35-1.15-.35s-.624.117-1.151.35c-.072.031-.151.068-.235.105-.412.188-.943.429-1.413.525-1.19.242-2.338.112-3.29-.478-.953-.591-1.582-1.563-1.881-2.761-.319-1.276-.065-2.569.394-3.663a8.944 8.944 0 011.868-2.786zM22 8.952a2 2 0 11-4.001-.001A2 2 0 0122 8.952zm-7-2a2 2 0 10-.001-4.001A2 2 0 0015 6.952z"></path></svg>
      }
      {
        (icon === 'mobile') &&
        <svg viewBox="0 0 24 24" width="24px" height="24px" className='summary-visit-slide-svg'><path d="M17.5 3h-11c-.3 0-.5.2-.5.5v17c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-17c0-.3-.2-.5-.5-.5zM16 18H8V6h8v12z"></path></svg>
      }
      {
        (icon === 'cancel') &&
        <svg viewBox="0 0 24 24" width="24px" height="24px" className='summary-visit-slide-svg'><path d="M4.013 12c0-2.1.9-4.2 2.4-5.6l1.6 1.6V3h-5l1.9 1.9c-3.9 3.9-3.9 10.3 0 14.2 1.9 1.801 4.4 2.9 7.1 2.9v-2c-4.4 0-8-3.6-8-8z"></path><path d="M12.514 7h-1c-.3 0-.5.2-.5.5v4.9c0 .1-.1.3-.1.4l-2.2 2.2c-.2.2-.2.5 0 .7l.7.7c.2.199.5.199.7 0l2.8-2.801c.101-.101.101-.199.101-.399V7.5c-.001-.3-.203-.5-.501-.5zM20.014 12H22c0-5.5-4.486-10-9.987-10v2c4.4 0 8.001 3.6 8.001 8zM20.713 14l-4.5 4.7-1.8-2-1.399 1.4 3.199 3.4L22 15.4z"></path></svg>
      }
    </>
  )
}


InfoIcon.defaultProps = {}

export default InfoIcon