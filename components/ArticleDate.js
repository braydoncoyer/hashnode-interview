import { parseISO, format } from "date-fns";

const ArticleDate = ({date}) => {
    const dateToDisplay = parseISO(date);
    return (
      <time dateTime={dateToDisplay} className="text-gray-500">
        {format(dateToDisplay, "LLLL d, yyyy")}
      </time>
    );
}

export { ArticleDate }