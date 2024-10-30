import styles from './Link.module.css';

const Link = ({txt, url}) => {
    return (
        <a href={url}>
            {txt}
        </a>
    )
}

export default Link;