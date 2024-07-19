function copyChapterURL(id: string): void {
    navigator.clipboard.writeText(window.location.href+id)
}