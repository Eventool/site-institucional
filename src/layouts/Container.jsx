import styles from './Container.module.css';

const Container = ({ children }) => {
    return (
        <>
        <main>
            {children}
        </main>
        </>
    )
}

export default Container;