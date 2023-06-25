import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";

const exportToWord = async () => {
  const doc = new Document();

  // Create a heading
  const heading = new Paragraph({
    children: [
      new TextRun({
        text: "This is a Heading",
        bold: true,
        size: 28, // font size in half-points, so 28 is 14pt font
      }),
    ],
    heading: HeadingLevel.HEADING_1,
  });

  const heading2 = new Paragraph({
    children: [
      new TextRun({
        text: "This is a Second Heading",
        bold: true,
        size: 28,
      }),
    ],
    heading: HeadingLevel.HEADING_2,
  });

  const lines = ["Line 1", "Line 2", "Line 3"]; // Array of strings

  // Create a paragraph for each string in the array
  const paragraphs = lines.map(line => new Paragraph(line));

  // Include the heading paragraph along with the other paragraphs
  doc.addSection({
    children: [heading, ...paragraphs, heading2],
  });

  const blob = await Packer.toBlob(doc);

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "test.docx";

  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
};

export default exportToWord;
