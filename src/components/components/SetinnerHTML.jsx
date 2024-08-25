const SetInnerHTML = ({ id, value }) => {
    return (
        <div id={id} className="setinnerhtml-content" dangerouslySetInnerHTML={{__html: String(value).replaceAll("\n", "<br/>").replaceAll("?nl>", "&#92;n")}}>
        </div>
    );
};

export default SetInnerHTML;
