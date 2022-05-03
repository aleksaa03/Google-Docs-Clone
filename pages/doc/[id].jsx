import { useState, useEffect } from "react";
import TextEditor from "../../components/TextEditor";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { auth, db, SignOut } from "../../firebase";
import Login from "../../components/Login";
import Head from "next/head";

function Doc() {
  const [user, setUser] = useState([]);
  const [document, setDocument] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));

    if (user) {
      db.collection("userDocs")
        .doc(user.email)
        .collection("docs")
        .doc(id)
        .get()
        .then((doc) => {
          setDocument({ id: doc.id, ...doc.data() });
        });
    }
  }, [user]);

  return (
    <div>
      <Head>
        <title>Doc: {document.id}</title>
      </Head>
      {user ? (
        <>
          <header className="flex justify-between items-center p-3 pb-1">
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              <Icon name="description" size="5xl" color="blue" />
            </span>
            <div className="flex-grow px-2">
              <h2>{document.fileName}</h2>
              <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
                <p className="option">File</p>
                <p className="option">Edit</p>
                <p className="option">View</p>
                <p className="option">Insert</p>
                <p className="option">Format</p>
                <p className="option">Tools</p>
              </div>
            </div>
            <Button
              color="lightBlue"
              buttonType="filled"
              size="regular"
              className="hidden md:!inline-flex h-10"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="light"
            >
              <Icon name="people" size="md" /> SHARE
            </Button>
            <img
              src={user.photoURL}
              alt=""
              className="cursor-pointer rounded-full h-10 w-10 ml-2"
              onClick={SignOut}
            />
          </header>
          <TextEditor user={user} doc={document} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Doc;
