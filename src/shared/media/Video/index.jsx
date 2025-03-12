import styles from './styles.module.scss';

const Video = ({ className, src, type, ...props }) => {
   return (
      <video
         className={`rounded-24 ${styles.video} ${className && className}`}
         autoPlay={true}
         loop={true}
         muted={true}
         playsInline={true}
         width={680}
         height={420}
         {...props}
         loading="lazy">
         <source src={src} type={type} />
      </video>
   );
};

export default Video;
