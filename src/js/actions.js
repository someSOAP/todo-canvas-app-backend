function addNote(note, context) {
    addAction({
        type: "add_note",
        note: note
    }, context);
}

function doneNote(id, context){
    addAction({
        type: "done_note",
        id: id
    }, context);
}

function deleteNote(id, context){
    addAction({
        type: "delete_note",
        id: id
    }, context);
}

function goTo(place, context) {
    addAction({
        type: "go_to",
        place: place
    }, context);
}

function goToNext(context) {
    addAction({
        type: "go_next",
    }, context);
}

function goToBack(context) {
    addAction({
        type: "go_back",
    }, context);
}