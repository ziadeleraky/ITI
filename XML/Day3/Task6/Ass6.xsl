<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">

	<xsl:template match="CATALOG">
		<xsl:element name="h1">My CD Collection</xsl:element>
		<table border="1">
			<tr style="background-color='#9acd32'">
				<th>Title</th>
				<th>Artist</th>
				<th>Price</th>
			</tr>
			
			<xsl:for-each select="CD">
			<xsl:choose>
				<xsl:when test="PRICE &gt; 10">
					<tr>
						<td><xsl:value-of select="TITLE"/></td>
						<td style="background-color:red;color:white"><xsl:value-of select="ARTIST"/></td>
						<td><xsl:value-of select="PRICE"/></td>
					</tr>
				</xsl:when>
				<xsl:otherwise>
					<tr>
						<td><xsl:value-of select="TITLE"/></td>
						<td style="background-color:#9acd45"><xsl:value-of select="ARTIST"/></td>
						<td><xsl:value-of select="PRICE"/></td>
					</tr>
				</xsl:otherwise>
			</xsl:choose>
			</xsl:for-each>
			
			
		</table>
	</xsl:template>

</xsl:stylesheet>
