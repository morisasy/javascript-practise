var programmingLanguages = {
    java: {
        yearCreated: 1995,
        creator: "James Gosling"
    },
    javaScript: {
        yearCreated: 1995,
        creator: "Brendan Eich"
    }
}

function addProgrammingLanguage(nameOfLanguage, yearLanguageCreated, creatorOfLanguage){
    // how can we access the programming languages object?
    // We can't use dot notation, because we don't know the name of
    // the key until the function is called.
    // Instead we use bracket notation where the key is the
    // nameOfLanguage that is being passed to the function.
    programmingLanguages[nameOfLanguage] = {
        // Creating the object which will be the value of the
        // key.  We can directly assign the yearLanguageCreated
        // and creatorOfLanguage to the appropriate keys here.
        yearCreated: yearLanguageCreated,
        creator: creatorOfLanguage
    }
}

// Usage example: Adding a key of ruby to the programming language object,
// with the value of 1995 for the key "yearCreated" and the value
// "Yukihiro Matsumoto" for creatorOfLanguage
addProgrammingLanguage("ruby", 1995, "Yukihiro Matsumoto");