import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function CommonCard({
  title,
  description,
  content,
  footerContent,
  extraTextStyles,
  hedderRightContent,
}) {
  return (
    <Card className="flex flex-col gap-6 p-8 transition duration-300 bg-gray-100 cursor-pointer rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-600/10">
      <CardHeader className="p-0 ">
        <div className="flex justify-between">
          {title ? (
            <CardTitle
              className={`text-2xl max-w-[250px] text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-gray-950  ${
                extraTextStyles ? extraTextStyles : null
              }`}
            >
              {title}
            </CardTitle>
          ) : null}
          {hedderRightContent ? hedderRightContent : null}
        </div>
        <div className="flex justify-starts">
          {description ? (
            <CardDescription className="mt-3 text-gray-600">
              {description}
            </CardDescription>
          ) : null}
        </div>
      </CardHeader>
      <div>
        {content ? <CardContent className="p-0">{content}</CardContent> : null}
      </div>
      <CardFooter className="p-0">{footerContent}</CardFooter>
    </Card>
  );
}

export default CommonCard;
