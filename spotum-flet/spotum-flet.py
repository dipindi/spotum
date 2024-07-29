import flet
from flet import AppBar, CupertinoFilledButton, Page, Container, Text, View, FontWeight, colors, TextButton, padding, ThemeMode, border_radius, Image, FilePicker, FilePickerResultEvent


def main(page: Page):
    page.title = "SpotumAI"
    page.theme_mode = ThemeMode.LIGHT

    page.fonts = {
        "RobotoFlex": f"fonts/RobotoFlex-VariableFont.ttf",
        "RobotoMono": f"fonts/RobotoMono-VariableFont.ttf",
        "RobotoMonoItalic": f"fonts/RobotoMono-Italic-VariableFont.ttf"
    }
    
    # Pick files dialog
    def pick_files_result(e: FilePickerResultEvent):
        selected_files.value = (
            ", ".join(map(lambda f: f.name, e.files)) if e.files else "Cancelled!"
        )
        selected_files.update()

    pick_files_dialog = FilePicker(on_result=pick_files_result)
    selected_files = Text()

    def route_change(e):
        page.views.clear()
        page.views.append(
            View(
                "/",
                [
                    AppBar(title_spacing=50, title=Text("Spotum", font_family="RobotoFlex", size=40, weight=FontWeight.W_700, color=colors.BLACK), bgcolor="#f8f9ff", toolbar_height=120,
                           actions=[
                               TextButton(content=Container(Text("GitHub", font_family="RobotoFlex", size=18, weight=FontWeight.W_400, color=colors.BLACK), padding=padding.only(right=25, left=25)), url="https://github.com/dipindi/spotum"),
                               TextButton(content=Container(Text("About Us", font_family="RobotoFlex", size=18, weight=FontWeight.W_400, color=colors.BLACK), padding=padding.only(right=25, left=25)), on_click=lambda _: page.go("/aboutus"))
                           ]),
                    Container(
                        Text("REVOLUTIONIZE TUBERCULOSIS\nDETECTION WITH AI", font_family="RobotoFlex", size=40, weight=FontWeight.W_800, color=colors.BLACK),
                        padding=padding.only(left=100, top=70)
                    ),
                    Container(
                        Text("your AI-powered ally in detecting\ntuberculosis from X-ray images\nwith an impressive 98% accuracy", font_family="RobotoMono", size=20, weight=FontWeight.W_300, color=colors.BLACK),
                        padding=padding.only(left=100, bottom=70)
                    ),
                    Container(
                        CupertinoFilledButton(content=Text("Get Started", font_family="RobotoFlex", size=18, weight=FontWeight.W_500, color=colors.WHITE), border_radius=border_radius.all(8), on_click=lambda _: page.go("/spotumapp")),
                        padding=padding.only(left=100)
                    )
                ],
            )
        )
        if page.route == "/spotumapp":
            page.views.append(
                View(
                    "/spotumapp",
                    [
                        AppBar(color=colors.BLACK, bgcolor="#f8f9ff"),
                        CupertinoFilledButton(content=Text("Upload Image", font_family="RobotoFlex", size=18, weight=FontWeight.W_500, color=colors.WHITE), border_radius=border_radius.all(8), on_click=lambda _: pick_files_dialog.pick_files(allow_multiple=True)),
                    ],
                )
            )
        if page.route == "/aboutus":
            page.views.append(
                View(
                    "/aboutus",
                    [
                        AppBar(color=colors.BLACK, bgcolor="#f8f9ff"),
                        # Container(
                        #     Text("MEET THE TEAM", font_family="RobotoFlex", size=40, weight=FontWeight.W_700, color=colors.BLACK),
                        #     padding=padding.only(left=100)
                        # ),
                        Container(
                            Text("MEET THE TEAM", font_family="RobotoFlex", size=40, weight=FontWeight.W_700, color=colors.BLACK),
                            padding=padding.only(left=100)
                        ),
                        Container(
                            Text("Rance De Guzman", font_family="RobotoFlex", size=20, weight=FontWeight.W_600, color=colors.BLACK),
                            padding=padding.only(left=400, top=60)
                        ),
                        Container(
                            Text("rjldeguzman@mymail.mapua.edu.ph", font_family="RobotoMono", size=16, weight=FontWeight.W_300, color=colors.BLACK),
                            padding=padding.only(left=400)
                        ),
                        Container(
                            Text("Reji Capoquian", font_family="RobotoFlex", size=20, weight=FontWeight.W_600, color=colors.BLACK),
                            padding=padding.only(left=400, top=60)
                        ),
                        Container(
                            Text("rtcapoquian@mymail.mapua.edu.ph", font_family="RobotoMono", size=16, weight=FontWeight.W_300, color=colors.BLACK),
                            padding=padding.only(left=400)
                        ),
                        Container(
                            Text("Mico Malatag", font_family="RobotoFlex", size=20, weight=FontWeight.W_600, color=colors.BLACK),
                            padding=padding.only(left=400, top=60)
                        ),
                        Container(
                            Text("mkpmalatag@mymail.mapua.edu.ph", font_family="RobotoMono", size=16, weight=FontWeight.W_300, color=colors.BLACK),
                            padding=padding.only(left=400)
                        ),
                    ],
                )
            )
        page.update()

    def view_pop(e):
        page.views.pop()
        top_view = page.views[-1]
        page.go(top_view.route)

    page.on_route_change = route_change
    page.on_view_pop = view_pop

    page.go(page.route)


flet.app(main)
