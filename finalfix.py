import re
# QUOTE extras -> builder-relevant
q=open("quote.html").read()
for oldv,oldt,newv,newt in [
 ("Blinds","Blinds","Sticker and adhesive","Stickers &amp; adhesive"),
 ("Carpet steam clean","Carpet steam clean","Floor buff or polish","Floor buff / polish"),
 ("Oven and rangehood","Oven and rangehood","Paint and silicone spots","Paint &amp; silicone"),
 ("Mould treatment","Mould treatment","Pressure clean external","Pressure clean"),
]:
    q=q.replace('value="%s"'%oldv,'value="%s"'%newv).replace('opt-t">%s<'%oldt,'opt-t">%s<'%newt)
open("quote.html","w").write(q)

# ABOUT stat label
a=open("about.html").read().replace('stat-label">Bonds cleaned','stat-label">Sites cleaned')
open("about.html","w").write(a)

# TERMS
t=open("terms.html").read()
t=t.replace('Brisbane Builders Clean provides cleaning services including builders and post-construction cleans, commercial and end of lease bond cleans, carpet cleaning, upholstery cleaning and pest control across Brisbane and surrounding areas.',
            "Brisbane Builders Clean provides builders and post-construction cleaning services, including rough, sparkle and final detail cleans for new builds, renovations and developments, across Brisbane's south side and surrounding areas.")
t=t.replace('For bond cleans, our re clean support applies to items on the agreed cleaning checklist.',
            'For builders cleans, our re-clean support applies to items on the agreed scope of works.')
t=t.replace('<h2>6. Bond cleans</h2>\n      <p>For end of lease bond cleans, we clean to a detailed exit checklist. While our work is designed to help you meet inspection standards, the return of a bond is decided by your agent, landlord or property manager and can depend on factors beyond cleaning, such as property damage and wear. We cannot guarantee the release of a bond, but we will support reasonable re clean requests that relate to our agreed checklist.</p>',
            '<h2>6. Builders cleans</h2>\n      <p>For builders and post-construction cleans, we clean to an agreed scope of works. While our work is designed to help you meet handover and inspection standards, final sign-off is decided by the builder, developer, agent or certifier and can depend on factors beyond cleaning, such as trades returning to site or damage after our clean. We cannot guarantee sign-off, but we will support reasonable re-clean requests that relate to our agreed scope.</p>')
# remove members giveaway section, renumber contact
t=re.sub(r'\s*<h2 id="giveaway">12\. Members giveaway terms</h2>.*?</ul>\s*\n\s*<h2>13\. Contact us</h2>',
         '\n\n      <h2>12. Contact us</h2>', t, flags=re.S)
t=t.replace('Website, service and members giveaway terms for Brisbane Builders Clean in Brisbane.',
            "Website and service terms for Brisbane Builders Clean, Brisbane's south side builders cleaners.")
t=t.replace('The terms that govern your use of this website, our services and the Brisbane Builders Clean members giveaway.',
            'The terms that govern your use of this website and our services.')
open("terms.html","w").write(t)
print("final fixes applied")
