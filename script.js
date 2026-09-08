function identifyPolymer() {

    let source = document.getElementById("source").value;
    let type = document.getElementById("type").value;
    let polymerization = document.getElementById("polymerization").value;

    let result = document.getElementById("result");

if (source === "" || type === "" || polymerization === "") {
    result.innerHTML = `
        <h2>Please Complete All Fields</h2>
        <p>Select Source, Polymer Type and Polymerization Type before identifying the polymer.</p>
    `;
    return;
}

    if (
        source === "synthetic" &&
        type === "thermoplastic" &&
        polymerization === "addition"
    ) {

        result.innerHTML = `
            <h2>Identification Result</h2>
            <h3>Polyethylene</h3>

            <p><b>Type:</b> Thermoplastic</p>
            <p><b>Polymerization:</b> Addition</p>

            <p><b>Properties:</b>
            Lightweight, flexible and chemically resistant.</p>

            <p><b>Applications:</b>
            Packaging, containers and pipes.</p>
        `;

    }

    else if (
        source === "synthetic" &&
        type === "thermoplastic" &&
        polymerization === "condensation"
    ) {

        result.innerHTML = `
            <h2>Identification Result</h2>
            <h3>Nylon 6,6</h3>

            <p><b>Type:</b> Thermoplastic</p>
            <p><b>Polymerization:</b> Condensation</p>

            <p><b>Properties:</b>
            Strong, durable and resistant to wear.</p>

            <p><b>Applications:</b>
            Fibres, textiles and engineering components.</p>
        `;

    }

    else if (
        source === "synthetic" &&
        type === "thermosetting"
    ) {

        result.innerHTML = `
            <h2>Identification Result</h2>
            <h3>Epoxy Resin</h3>

            <p><b>Type:</b> Thermosetting</p>

            <p><b>Properties:</b>
            Strong, hard and chemically resistant.</p>

            <p><b>Applications:</b>
            Adhesives, coatings and electronic components.</p>
        `;

    }

    else {

        result.innerHTML = `
            <h2>Unable to Identify</h2>
            <p>Please select the appropriate characteristics.</p>
        `;
    }
}

function resetForm() {

    document.getElementById("source").value = "";
    document.getElementById("type").value = "";
    document.getElementById("polymerization").value = "";

    document.getElementById("result").innerHTML = "";
}

function resetForm() {

    document.getElementById("source").value = "";
    document.getElementById("type").value = "";
    document.getElementById("polymerization").value = "";

    document.getElementById("result").innerHTML = "";
}