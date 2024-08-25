import SetInnerHTML from "./SetinnerHTML";

const SubProject = ({ name, body, url, status }) => {
    return (
        <div className="subproject">
            <h3 className="subproject-title">
                {name} <span className="subproject-status"> ({status}) </span>
            </h3>
            <SetInnerHTML value={body} />
            <a target="_blank" rel="noreferrer" href={url} className="subproject-link">
                View Project
            </a>
        </div>
    );
};

export default SubProject;
