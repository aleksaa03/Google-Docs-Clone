import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../firebase";

function DocumentRow({ id, fileName, date, email, updateDocumentRow }) {
  const router = useRouter();

  const DeleteCollection = () => {
    db.collection("userDocs")
      .doc(email)
      .collection("docs")
      .doc(id)
      .delete()
      .then(() => {
        router.push("/");
        updateDocumentRow();
      });
  };

  return (
    <>
      <div className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer">
        <div
          className="flex flex-grow items-center"
          onClick={() => router.push(`/doc/${id}`)}
        >
          <Icon name="article" size="3xl" color="blue" />
          <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
          <p className="pr-5 text-sm">{date.toDate().toLocaleDateString()}</p>
        </div>
        <Button
          color="gray"
          buttonType="outline"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="border-0"
          onClick={DeleteCollection}
        >
          <Icon name="delete" size="3xl" color="red" />
        </Button>
      </div>
    </>
  );
}

export default DocumentRow;
