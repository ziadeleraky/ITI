<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
	<xsl:template match="books">
	<xsl:element name="h2">Reviews</xsl:element>
	<table border="1">
		<tr style="background-color='#9acd32'">
			<th>Review</th>
			<th>3.5</th>
			<th>4</th>
		</tr>
		<tr>
			<td style="background-color='#9acd32'">Count</td>
			<td><xsl:value-of select="count(book[review = 3.5])" /></td>
			<td><xsl:value-of select="count(book[review = 4])" /></td>
		</tr>
	</table>

	
	</xsl:template>

</xsl:stylesheet>
