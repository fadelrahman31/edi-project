import {RequestedDocs} from "../entity/RequestedDocs";
const router = require('express').Router();


router.get("/", async (req, res) => {
    //const list = connection.getRepository(requestedDocs);
    //const requestedList : requestedDocs[] = await list.find();
    //res.send(requestedList);
    res.send("disini seharusnya muncul list requested documents");
});

export default router;
