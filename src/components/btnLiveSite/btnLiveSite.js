import gitHubIcon from '../btnGitHub/gitHub-black.svg';

const BtnLiveSite = ({ link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubIcon} alt="" />
            Посмотреть сайт
        </a>
    );
};

export default BtnLiveSite;