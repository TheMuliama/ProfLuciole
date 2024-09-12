function loadMarkdownContent(filePath, targetElementId) {
    fetch(filePath)
        .then(response => response.text())
        .then(markdown => {
            const html = marked.parse(markdown);
            document.getElementById(targetElementId).innerHTML = html;
        });
}
